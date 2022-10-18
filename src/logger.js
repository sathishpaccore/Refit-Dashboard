import { LOG_LEVEL } from "./environment"

function NO_OP(message, ...optionalParams) {
    console.log(message,'Message');
    return message;
}

/** Logger which outputs to the browser console */
export class ConsoleLogger {
  constructor(options) {
    const { level } = options || {}
    // console.log(NO_OP('meesage'),'function')
    this.error = console.error.bind(console)
    console.log(console.error.name,'NO_OP');
    // console.log(options,'getting error');
    // const fileData = NO_OP(console.error.name);
    //     const blob = new Blob([fileData], { type: "text/plain" });
    //     const url = URL.createObjectURL(blob);
    //     const link = document.createElement("a");
    // link.download = "user-info.json";
    // link.href = url;
    // link.click();
    const fileData = NO_OP(console.error.bind(console));
        const blob = new Blob([fileData], { type: "text/plain",path:'./text.txt' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
    link.create = "./text.txt";
    // link.href = url;
    // link.href = './text.txt';
    link.click();
    if (level === "error") {
        const fileData = NO_OP(console.error.bind(console));
        const blob = new Blob([fileData], { type: "text/plain",path:'./text.txt' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
    link.download = "user-info.json";
    link.href = url;
    link.click();
      this.warn = NO_OP
      this.log = NO_OP

      return
    }

    this.warn = console.warn.bind(console)

    if (level === "warn") {
      this.log = NO_OP

      return
    }

    this.log = console.log.bind(console)
  }
}

export const logger = new ConsoleLogger({ level: LOG_LEVEL })
