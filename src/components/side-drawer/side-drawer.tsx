import {Component, ComponentInterface, Host, h, Prop, State, Method} from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer implements ComponentInterface {
    @State() showContactInfo = false;

    @Prop({reflect: true}) header: string;
    @Prop({reflect: true, mutable: true}) open: boolean;

    onCloseDrawer = () => {
        this.open = false;
    };

    onContentChange = (content: 'nav' | 'contact') => {
        this.showContactInfo = content === 'contact';
    };

    @Method()
    async onOpenDrawer() {
        this.open = true;
    }

    render() {
        return (
            <Host>
                <div class="backdrop" onClick={this.onCloseDrawer} />
                <aside>
                    <header>
                        <h1>
                            {this.header}
                        </h1>
                        <button onClick={this.onCloseDrawer}>X</button>
                    </header>
                    <section id="tabs">
                        <button class={!this.showContactInfo ? 'active': ''} onClick={() => this.onContentChange('nav')}> Navigation</button>
                        <button class={this.showContactInfo ? 'active': ''} onClick={() => this.onContentChange('contact')}>Contact</button>
                    </section>
                    <main>
                        {this.showContactInfo ? (
                            <div id="contact-info">
                                <h2>Contact Information</h2>
                                <p>You can reach us via phone</p>
                                <ul>
                                    <li>Phone 87786171818</li>
                                    <li>Email: nurtylek98@gmailc.om</li>
                                </ul>
                            </div>
                        ) : <slot /> }
                    </main>
                </aside>
            </Host>
        );
    }

}
