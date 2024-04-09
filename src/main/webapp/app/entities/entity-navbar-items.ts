import NavbarItem from 'app/layouts/navbar/navbar-item.model';

export const EntityNavbarItems: NavbarItem[] = [
  {
    name: 'Customer',
    route: '/customer',
    translationKey: 'global.menu.entities.customer',
  },
  {
    name: 'Product',
    route: '/product',
    translationKey: 'global.menu.entities.productProduct',
  },
  {
    name: 'ProductCategory',
    route: '/product-category',
    translationKey: 'global.menu.entities.productProductCategory',
  },
  {
    name: 'ProductOrder',
    route: '/product-order',
    translationKey: 'global.menu.entities.productProductOrder',
  },
  {
    name: 'OrderItem',
    route: '/order-item',
    translationKey: 'global.menu.entities.productOrderItem',
  },
  {
    name: 'Invoice',
    route: '/invoice',
    translationKey: 'global.menu.entities.invoiceInvoice',
  },
  {
    name: 'Shipment',
    route: '/shipment',
    translationKey: 'global.menu.entities.invoiceShipment',
  },
  {
    name: 'Notification',
    route: '/notification',
    translationKey: 'global.menu.entities.notificationNotification',
  },
];
