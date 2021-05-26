import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() product: IProduct;
    @Output() productSelected: EventEmitter<any> = new EventEmitter();

    today = new Date();

    addCart(): void {
        console.log('Elemento añadido');
        this.productSelected.emit(this.product.id);
    }
}
