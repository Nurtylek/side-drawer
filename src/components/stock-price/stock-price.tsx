import {Component, ComponentInterface, Host, h, State, Prop, Watch, Listen} from '@stencil/core';
import {AV_API_KEY} from "../../global";

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice implements ComponentInterface {
    // stockInput: HTMLInputElement;
    // initialStock: string;
    // @Element() host: HTMLElement;

    @State() fetchedPrice: number;
    @State() stockUserInput: string;
    @State() isValid = false;
    @State() errorMessage: string;

    @Prop({mutable: true, reflect: true}) stockSymbol: string;

    @Watch('stockSymbol')
    stockSymbolChanged(newValue: string, oldValue: string) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.fetchStockPrice(newValue);
        }
    }

    onFetchStockPrice = (event: Event) => {
        event.preventDefault();
        // const stockSymbol =  (this.host.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        // const stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(this.stockUserInput);
        this.stockSymbol = this.stockUserInput;
    };

    onUserInput = (event: Event) => {
        this.stockUserInput = (event.target as HTMLInputElement).value;
        if (this.stockUserInput.trim() !== '') {
            this.isValid = true
        } else {
            this.isValid = false;
        }
    };

    componentWillLoad(): Promise<void> | void {
        console.log('componentWillLoad');
        if (this.stockSymbol) {
            // this.initialStock = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.isValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }

    componentDidLoad(): void {
        console.log('componentDidLoad');
    }

    componentWillUpdate(): Promise<void> | void {
        // console.log('Component will update');
        // if (this.stockSymbol !== this.initialStock) {
        //     this.initialStock = this.stockSymbol;
        //     this.fetchStockPrice(this.stockSymbol);
        // }
    }

    componentDidUpdate(): void {
        console.log('componentDidUpdate');
    }

    componentDidUnload() {
        console.log('componentDidUnload')
    }

    @Listen('body:symbolSelected')
    onStockSymbolSelected(event: CustomEvent) {
        console.log(event);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    };

    fetchStockPrice(stockSymbol: string) {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
            .then(res => res.json())
            .then(response => {
                if (response['Error Message']) {
                    throw new Error('Invalid symbol!')
                }
                this.errorMessage = null;
                this.fetchedPrice = +response['Global Quote']['05. price'];
            })
            .catch(e => {
                this.errorMessage = e.message;
            });
    }

    render() {
        return (
            <Host>
                <form onSubmit={this.onFetchStockPrice}>
                    <input type="text" id="stock-symbol"
                           // ref={el => this.stockInput = el}
                           value={this.stockUserInput}
                           onInput={this.onUserInput}
                    />
                    <button type="submit" disabled={!this.isValid}>Fetch</button>
                </form>
                <div>
                    {this.errorMessage ? <p>{this.errorMessage}</p> : (
                        this.fetchedPrice ? <p>Price: ${this.fetchedPrice}</p> : <p>Please enter a symbol!</p>
                    )}
                </div>
            </Host>
        );
    }

}
