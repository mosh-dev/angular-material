import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {isBrowser, isNode} from './platform';
import {
  DeliveryAreaModel,
  DeliveryCityModel
} from '../features/front/product-single/default-delivery-info/default-delivery-info.component';
import {environment} from '../../environments/environment';
import {TOP_SCROLL_CLASS} from '../values/static.values';

export interface CustomError {
  controlName: string;
  errors: any;
}

/**
 * Custom toFixed To Match PHP toFixed
 */
export const toFixed = (number: number) => Number((number * 100).toFixed(0)) / 100;
export const join = (strings: Array<string>, joinBy = ',') => {
  return strings
    .filter(string => string)
    .join(joinBy || ',');
};

/**
 * Scroll to first element by class name
 * @param className
 * example row
 * @param behaviour scrollBehaviour
 */
export const scrollTo = function (className: string, behaviour: ScrollBehavior = 'smooth'): void {
  if (isBrowser) {
    setTimeout(() => {
      const elementList = document.querySelectorAll('.' + className);
      const element = elementList[0] as HTMLElement;
      if (element) {
        element.scrollIntoView({behavior: behaviour, block: 'start'});
      }
    }, 200);
  }
};
export const scrollToTop = () => scrollTo(TOP_SCROLL_CLASS);
export const toTitleCase = (string: string) => {
  const str = string.replace('_', ' ');
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};


/**
 * Function That generates all error in one object.
 */
export const buildErrors = (controls, errs = []): Array<CustomError> => {
  Object.keys(controls).forEach(controlName => {
    if (controls[controlName] instanceof FormGroup) {
      if (controls[controlName].errors) {
        const err = {};
        err['controlName'] = controlName;
        err['errors'] = controls[controlName].errors;
        errs.push(err);
      }
      buildErrors(controls[controlName].controls, errs);
    }
    if (controls[controlName] instanceof FormControl) {
      if (controls[controlName].errors) {
        const err = {};
        err['controlName'] = controlName;
        err['errors'] = controls[controlName].errors;
        errs.push(err);
      }
    }
    if (controls[controlName] instanceof FormArray) {
      const arr = [];
      controls[controlName].controls.forEach(control => {
        if (control.errors) {
          arr.push(control.errors);
        }
      });
      const err = {};
      err['controlName'] = controlName;
      err['errors'] = arr;
      errs.push(err);
    }
  });
  return errs.filter(({errors}) => {
    return (errors instanceof Object) ? Object.keys(errors).length : errors ? errors.length : false;
  });
};

export const arrFromNumber = (number: number) => Array.from(Array(number).keys());

/**
 * Converts group to individual item.
 */
export const mapCitiesFromGroup = (areas: Array<DeliveryAreaModel> = []): Array<DeliveryCityModel | any> => {
  const items = [];
  areas.forEach(area => {
    area.cities.forEach(city => {
      city['area'] = area.title;
      items.push(city);
    });
  });
  return items;
};


export const formatDate = (date, separator = '/') => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join(separator);
};

/**
 * Convert to valid phone number
 * @param expression [User InputPhone Number]
 * @return [valid phone number]
 */
export function convertToValidMobileNumber(expression: string): string {
  let result;
  let length;
  if (expression.substring(0, 2) === '01') {
    length = 11;
    result = '88' + expression;
  } else if (expression.substring(0, 1) === '1') {
    length = 10;
    result = '880' + expression;
  } else if (expression.substring(0, 5) === '+8801') {
    length = 14;
    result = expression.substr(1);
  } else if (expression.substring(0, 4) === '8801') {
    length = 13;
    result = expression;
  }

  return (expression.length === length) ? result : null;
}

/**
 * Check if phone number
 * @param expression [Phone number or email]
 */
export function isPhoneNumber(expression) {
  return !expression.includes('@');
}

export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
export const valueFromPercent = (percentOf: number, percent: number) => (percentOf / 100) * percent;
export const paramsToObject = (paramString) => {
  return JSON.parse('{"' + decodeURI(paramString.replace(/&/g, '","').replace(/=/g, '":"')) + '"}');
};
export const splitRoute = (urlString: string) => {
  const object = {url: urlString, params: {}};
  if (urlString && urlString.includes('?')) {
    object.url = urlString.split('?')[0];
    object.params = paramsToObject(urlString.split('?')[1]);
  }
  return object;
};

export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

export const LOG = (...data) => {
  if (!environment.production) {
    console.log(...data);
  }
};

export const fromBase64 = (base64String: string) => {
  return isNode ? Buffer.from(base64String, 'base64').toString() : atob(base64String);
};

export const toBase64 = (string: string) => {
  return isNode ? Buffer.from(string).toString('base64') : btoa(string);
};

export const getBrowserName = () => {
  return ['Chrome', 'Firefox', 'Safari', 'Camino', 'op']
    .find(browser => navigator.userAgent.includes(browser)) || 'Unknown';
};
