declare module "*.html" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

declare namespace GlobalMixins {
  interface DisplayObjectEvents extends FederatedEventEmitterTypes {
    [x: string | number | symbol]: any;
  }

  interface DisplayObject
    extends Omit<FederatedEventTarget, keyof IFederatedDisplayObject>,
      IFederatedDisplayObject {
    [x: string | number | symbol]: any;
  }
}
