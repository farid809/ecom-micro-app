import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'storeApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'customer',
    data: { pageTitle: 'storeApp.customer.home.title' },
    loadChildren: () => import('./customer/customer.routes'),
  },
  {
    path: 'product',
    data: { pageTitle: 'storeApp.productProduct.home.title' },
    loadChildren: () => import('./product/product/product.routes'),
  },
  {
    path: 'product-category',
    data: { pageTitle: 'storeApp.productProductCategory.home.title' },
    loadChildren: () => import('./product/product-category/product-category.routes'),
  },
  {
    path: 'product-order',
    data: { pageTitle: 'storeApp.productProductOrder.home.title' },
    loadChildren: () => import('./product/product-order/product-order.routes'),
  },
  {
    path: 'order-item',
    data: { pageTitle: 'storeApp.productOrderItem.home.title' },
    loadChildren: () => import('./product/order-item/order-item.routes'),
  },
  {
    path: 'invoice',
    data: { pageTitle: 'storeApp.invoiceInvoice.home.title' },
    loadChildren: () => import('./invoice/invoice/invoice.routes'),
  },
  {
    path: 'shipment',
    data: { pageTitle: 'storeApp.invoiceShipment.home.title' },
    loadChildren: () => import('./invoice/shipment/shipment.routes'),
  },
  {
    path: 'notification',
    data: { pageTitle: 'storeApp.notificationNotification.home.title' },
    loadChildren: () => import('./notification/notification/notification.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
