import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Customer e2e test', () => {
  const customerPageUrl = '/customer';
  const customerPageUrlPattern = new RegExp('/customer(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  // const customerSample = {"firstName":"Kaleigh","lastName":"Langosh-Kuhlman","gender":"OTHER","email":"j<^w|@B6.~RZ","phone":"897.644.5478 x61574","addressLine1":"qua aha","city":"Tremainehaven","country":"Nicaragua"};

  let customer;
  // let user;

  beforeEach(() => {
    cy.login(username, password);
  });

  /* Disabled due to incompatibility
  beforeEach(() => {
    // create an instance at the required relationship entity:
    cy.authenticatedRequest({
      method: 'POST',
      url: '/api/users',
      body: {"login":"bitterly pine","firstName":"Hilbert","lastName":"Kerluke"},
    }).then(({ body }) => {
      user = body;
    });
  });
   */

  beforeEach(() => {
    cy.intercept('GET', '/api/customers+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/customers').as('postEntityRequest');
    cy.intercept('DELETE', '/api/customers/*').as('deleteEntityRequest');
  });

  /* Disabled due to incompatibility
  beforeEach(() => {
    // Simulate relationships api for better performance and reproducibility.
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [user],
    });

  });
   */

  afterEach(() => {
    if (customer) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/customers/${customer.id}`,
      }).then(() => {
        customer = undefined;
      });
    }
  });

  /* Disabled due to incompatibility
  afterEach(() => {
    if (user) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/api/users/${user.id}`,
      }).then(() => {
        user = undefined;
      });
    }
  });
   */

  it('Customers menu should load Customers page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('customer');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Customer').should('exist');
    cy.url().should('match', customerPageUrlPattern);
  });

  describe('Customer page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(customerPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Customer page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/customer/new$'));
        cy.getEntityCreateUpdateHeading('Customer');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', customerPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      /* Disabled due to incompatibility
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/api/customers',
          body: {
            ...customerSample,
            user: user,
          },
        }).then(({ body }) => {
          customer = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/api/customers+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              headers: {
                link: '<http://localhost/api/customers?page=0&size=20>; rel="last",<http://localhost/api/customers?page=0&size=20>; rel="first"',
              },
              body: [customer],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(customerPageUrl);

        cy.wait('@entitiesRequestInternal');
      });
       */

      beforeEach(function () {
        cy.visit(customerPageUrl);

        cy.wait('@entitiesRequest').then(({ response }) => {
          if (response.body.length === 0) {
            this.skip();
          }
        });
      });

      it('detail button click should load details Customer page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('customer');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', customerPageUrlPattern);
      });

      it('edit button click should load edit Customer page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Customer');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', customerPageUrlPattern);
      });

      it('edit button click should load edit Customer page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Customer');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', customerPageUrlPattern);
      });

      it.skip('last delete button click should delete instance of Customer', () => {
        cy.intercept('GET', '/api/customers/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('customer').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', customerPageUrlPattern);

        customer = undefined;
      });
    });
  });

  describe('new Customer page', () => {
    beforeEach(() => {
      cy.visit(`${customerPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Customer');
    });

    it.skip('should create an instance of Customer', () => {
      cy.get(`[data-cy="firstName"]`).type('Heloise');
      cy.get(`[data-cy="firstName"]`).should('have.value', 'Heloise');

      cy.get(`[data-cy="lastName"]`).type('Hahn');
      cy.get(`[data-cy="lastName"]`).should('have.value', 'Hahn');

      cy.get(`[data-cy="gender"]`).select('OTHER');

      cy.get(`[data-cy="email"]`).type('M`@w.f)');
      cy.get(`[data-cy="email"]`).should('have.value', 'M`@w.f)');

      cy.get(`[data-cy="phone"]`).type('868.689.7493 x5648');
      cy.get(`[data-cy="phone"]`).should('have.value', '868.689.7493 x5648');

      cy.get(`[data-cy="addressLine1"]`).type('drat');
      cy.get(`[data-cy="addressLine1"]`).should('have.value', 'drat');

      cy.get(`[data-cy="addressLine2"]`).type('a pelt grumble');
      cy.get(`[data-cy="addressLine2"]`).should('have.value', 'a pelt grumble');

      cy.get(`[data-cy="city"]`).type('East Royalstead');
      cy.get(`[data-cy="city"]`).should('have.value', 'East Royalstead');

      cy.get(`[data-cy="country"]`).type('Malta');
      cy.get(`[data-cy="country"]`).should('have.value', 'Malta');

      cy.get(`[data-cy="user"]`).select(1);

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        customer = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', customerPageUrlPattern);
    });
  });
});
