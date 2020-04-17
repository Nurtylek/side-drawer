import {Component, ComponentInterface, Host, h, State, Prop} from '@stencil/core';

@Component({
  tag: 'my-tooltip',
  styleUrl: 'my-tooltip.css',
  shadow: true
})
export class MyTooltip implements ComponentInterface {

    @State() isVisible = false;

    @Prop() text: string;

    onToggleTooltip = () => {
        this.isVisible = !this.isVisible;
    };


    render() {
        return (
            <Host>
                <slot />
                <span id="icon" onClick={this.onToggleTooltip}>?</span>
                {this.isVisible ? (
                    <div id="text">{this.text}</div>
                ): undefined}
            </Host>
        );
    }

}
