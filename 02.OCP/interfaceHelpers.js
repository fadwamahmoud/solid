// Interface Approximation Utilities
class ImplementationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ImplementationError";
    this.message = message;
  }
}
ImplementationError.prototype = new Error();

function createWithInterfaceValidation(prototypeObject, interfaceObject) {
  Object.keys(interfaceObject).forEach(function (key) {
    if (
      prototypeObject[key] === null ||
      typeof prototypeObject[key] !== "function"
    ) {
      throw new ImplementationError(
        "Required method " + key + " has not been implemented."
      );
    }
  });

  return Object.create(prototypeObject);
}

module.exports = createWithInterfaceValidation;
