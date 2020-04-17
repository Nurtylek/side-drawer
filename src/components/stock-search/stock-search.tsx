import {Component, ComponentInterface, Host, h, State, EventEmitter, Event} from '@stencil/core';
import {AV_API_KEY} from "../../global";

@Component({
  tag: 'stock-search',
  styleUrl: 'stock-search.css',
  shadow: true,
})
export class StockSearch implements ComponentInterface {
    stockInput: HTMLInputElement;

    @State() searchRes: {
        symbol: string,
        name: string
    }[] = [];

    @Event() symbolSelected: EventEmitter<string>;

    onFindStocks = (event: Event) => {
        event.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.stockInput.value}&apikey=${AV_API_KEY}`)
            .then(res => res.json())
            .then(response => {
                this.searchRes = response.bestMatches.map(el => ({
                    name: el['2. name'],
                    symbol: el['1. symbol']
                }));
            })
            .catch(error => {
                console.log(error)
            });
    };

    onSelectSymbol = (symbol: string) => {
        this.symbolSelected.emit(symbol);
    };

    render() {
        return (
            <Host>
                <form onSubmit={this.onFindStocks}>
                    <input type="text" id="stock-symbol"
                           ref={el => this.stockInput = el}
                    />
                    <button type="submit">Fetch</button>
                </form>
                <ul>
                    {this.searchRes.map((res, index) =>
                        <li key={index} onClick={() => this.onSelectSymbol(res.symbol)}><strong>{res.symbol} - {res.name}</strong></li>
                    )}
                </ul>
            </Host>
        );
    }

}
