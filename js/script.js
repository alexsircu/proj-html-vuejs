var app = new Vue({
  el: '#root',
  data: {
    headerLeft: {
      openingDay: 'Mon',
      closingDay: 'Sat',
      openingHopur: '9:00',
      closingHour: '18:00'
    },
    headerRight: [
      {
        dataTextHeader: '+1 (305) 1234-5678',
        iconClassNameHeader: 'fas fa-phone-alt'
      },
      {
        dataTextHeader: 'hello@example.com',
        iconClassNameHeader: 'fas fa-envelope'
      },
      {
        iconClassNameHeader: 'fab fa-facebook-f'
      },
      {
        iconClassNameHeader: 'fab fa-twitter'
      },
      {
        iconClassNameHeader: 'fab fa-linkedin-in'
      }
    ],
    navbar: [
      {
        name: 'HOME'
      },
      {
        name: 'ABOUT'
      },
      {
        name: 'SERVICES'
      },
      {
        name: 'PROCESS'
      },
      {
        name: 'TEAM'
      },
      {
        name: 'BLOG'
      }
    ],
    contactsFooter: [
      {
        dataTextFooter: '+1 (305) 1234-5678',
        iconClassNameFooter: 'fas fa-phone-alt'
      },
      {
        dataTextFooter: 'hello@example.com',
        iconClassNameFooter: 'fas fa-envelope'
      },
      {
        dataTextFooter: 'Main Avenue, 987',
        iconClassNameFooter: 'fas fa-map-marker-alt'
      }
    ],
    linksFooter : [
      {
        iconClassLinksFooter: 'fas fa-angle-right',
        dataTextAboutFooter: 'The Company',
        dataTextServicesFooter: 'Audit & Assurance',
        dataTextSupportFooter: 'Responsability'
      },
      {
        iconClassLinksFooter: 'fas fa-angle-right',
        dataTextAboutFooter: 'Institutional',
        dataTextServicesFooter: 'Financial Advisory',
        dataTextSupportFooter: 'Terms of Use'
      },
      {
        iconClassLinksFooter: 'fas fa-angle-right',
        dataTextAboutFooter: 'Social & Events',
        dataTextServicesFooter: 'Analytics M&A',
        dataTextSupportFooter: 'About Cookies'
      },
      {
        iconClassLinksFooter: 'fas fa-angle-right',
        dataTextAboutFooter: 'Innovation',
        dataTextServicesFooter: 'Middle Marketing',
        dataTextSupportFooter: 'Privacy Policy'
      },
      {
        iconClassLinksFooter: 'fas fa-angle-right',
        dataTextAboutFooter: 'Environment',
        dataTextServicesFooter: 'Legal Consulting',
        dataTextSupportFooter: 'Accessibility'
      },
      {
        iconClassLinksFooter: 'fas fa-angle-right',
        dataTextAboutFooter: 'Technology',
        dataTextServicesFooter: 'Regulatory Risk',
        dataTextSupportFooter: 'Information'
      }
    ]
  }
});
