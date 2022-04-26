const Logger = {
  debug: (message?: any, ...optionalParams: any[]) => {
    console.debug(message, ':', JSON.stringify(optionalParams, null, 2));
  },
};

export default Logger;
