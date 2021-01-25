export namespace GlobalConst {
  export namespace LocalStorageKeyMapping {
    export const token = 'TOKEN';
    export const currentUser = 'CURRENT-USER';
  }
}

export namespace ImageHolder {
  export const imageUrl = './assets/images/150x150.png';
}

export namespace RegexValidator {
  export const datePattern = /^[2-9][0-9]\d{2}-(0[1-9]|1[012])-(0[1-9]|[1-2][0-9]|3[01])$/;
  export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  export const numberOnlyRegex = /^-?[0-9]+(?:\.[0-9]+)?$/;
  export const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
}
