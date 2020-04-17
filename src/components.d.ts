/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyTooltip {
        "text": string;
    }
    interface SideDrawer {
        "header": string;
        "onOpenDrawer": () => Promise<void>;
        "open": boolean;
    }
    interface StockPrice {
        "stockSymbol": string;
    }
    interface StockSearch {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTooltipElement extends Components.MyTooltip, HTMLStencilElement {
    }
    var HTMLMyTooltipElement: {
        prototype: HTMLMyTooltipElement;
        new (): HTMLMyTooltipElement;
    };
    interface HTMLSideDrawerElement extends Components.SideDrawer, HTMLStencilElement {
    }
    var HTMLSideDrawerElement: {
        prototype: HTMLSideDrawerElement;
        new (): HTMLSideDrawerElement;
    };
    interface HTMLStockPriceElement extends Components.StockPrice, HTMLStencilElement {
    }
    var HTMLStockPriceElement: {
        prototype: HTMLStockPriceElement;
        new (): HTMLStockPriceElement;
    };
    interface HTMLStockSearchElement extends Components.StockSearch, HTMLStencilElement {
    }
    var HTMLStockSearchElement: {
        prototype: HTMLStockSearchElement;
        new (): HTMLStockSearchElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-tooltip": HTMLMyTooltipElement;
        "side-drawer": HTMLSideDrawerElement;
        "stock-price": HTMLStockPriceElement;
        "stock-search": HTMLStockSearchElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyTooltip {
        "text"?: string;
    }
    interface SideDrawer {
        "header"?: string;
        "open"?: boolean;
    }
    interface StockPrice {
        "stockSymbol"?: string;
    }
    interface StockSearch {
        "onSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-tooltip": MyTooltip;
        "side-drawer": SideDrawer;
        "stock-price": StockPrice;
        "stock-search": StockSearch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-tooltip": LocalJSX.MyTooltip & JSXBase.HTMLAttributes<HTMLMyTooltipElement>;
            "side-drawer": LocalJSX.SideDrawer & JSXBase.HTMLAttributes<HTMLSideDrawerElement>;
            "stock-price": LocalJSX.StockPrice & JSXBase.HTMLAttributes<HTMLStockPriceElement>;
            "stock-search": LocalJSX.StockSearch & JSXBase.HTMLAttributes<HTMLStockSearchElement>;
        }
    }
}
