import { LitElement, html } from '@polymer/lit-element';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import './node_modules/rate-component/rate-component.js'

export class DishFormComponent extends LitElement {
    constructor() {
        super();
        this.newDish = {
            id: 0,
            image: '',
            name: '',
            energyValue: 0,
            rate: 0,
            description: '',
            price: 0
        }
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            newDish: {
                type: Object
            }
        };
    }

    __saveDishName() {
        const element = this.shadowRoot.querySelector('#name')
        this.newDish.name = element.value
    };

    __saveDishDescription() {
        const element = this.shadowRoot.getElementById('#description')
        this.newDish.description = element.value
    };

    __saveDishEnergyValue() {
        const element = this.shadowRoot.getElementById('#energyVaule')
        this.newDish.energyVaule = element.value
    };

    __saveDishPrice() {
        const element = this.shadowRoot.getElementById('#price')
        this.newDish.price = element.value
    };

    __saveDishImage() {
        const element = this.shadowRoot.getElementById('#image')
        this.newDish.image = element.value
    };

    __saveDishRate() {
        const element = this.shadowRoot.querySelector('rate-component')
        this.newDish.rate = element.rate
    }

    __saveDish() {
        this.dispatchEvent(new CustomEvent('new-dish-created', {
            detail: {
                newDish: this.newDish
            }
        }));
    }

    render() {
        return html `
        <div class="container">
            <paper-card class="form">
                <div class="card-content">
                    <h2>Nuevo platillo</h2>
                    <paper-input label="Nombre" id="name" @change="${this.__saveDishName}">
                        <iron-icon slot="prefix" icon="editor:border-color"></iron-icon>
                    </paper-input>
                    <paper-input label="Descripcion" id="description" @change="${this.__saveDishDescription}">
                        <iron-icon slot="prefix" icon="description"></iron-icon>
                    </paper-input>
                    <paper-input label="Calorias" id="energyValue" @change="${this.saveDishEnergyValue}">
                        <iron-icon slot="prefix" icon="favorite"></iron-icon>
                    </paper-input>
                    <paper-input label="Precio" id="price" @change="${this.__saveDishPrice}">
                        <iron-icon slot="prefix" icon="editor:monetization-on"></iron-icon>
                    </paper-input>
                    <paper-input label="Imagen" id="image" @change="${this.__saveDishImage}">
                        <iron-icon slot="prefix" icon="editor:insert-photo"></iron-icon>
                    </paper-input>
                    <rate-component rate="3" @rate-changed="${this.__saveDishRate}"></rate-component>
                </div>
                <div class="card-actions">
                    <paper-button class="info" on-click="${this.__savedish}">Guardar</paper-button>
                </div>
            </paper-card>
        </div>
        `;
    }
}
customElements.define('dish-form-component', DishFormComponent);