import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddUpdateComponent} from './add-update/add-update.component';
import {filter} from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements AfterViewInit, OnInit {
  displayedColumns = ['select', 'id', 'name', 'progress', 'color', 'actions'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  selection = new SelectionModel<any>(true, []);

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.dataSource.data.push(createNewUser(i));
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addItem() {
    this.dialog.open(AddUpdateComponent)
      .afterClosed()
      .pipe(filter(data => !!data))
      .subscribe(({name, color, progress}) => {
        this.dataSource.data = [...this.dataSource.data, {
          id: (this.dataSource.data.length + 1).toString(),
          name,
          progress,
          color
        }];
        this.cdr.markForCheck();
      });
  }

  delete(row) {
    const data = this.dataSource.data;
    data.splice(data.indexOf(row), 1);
    this.dataSource.data = data;
  }

  edit(row) {
    this.dialog
      .open(AddUpdateComponent, {data: row})
      .afterClosed()
      .pipe(filter(data => !!data))
      .subscribe(data => {
        Object.entries(data).forEach(([key, value]) => {
          row[key] = value;
        });
        this.cdr.markForCheck();
      });
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
