const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432', {logging: false});

const Page = db.define('Page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      isUrl: true
    }

  },
  content: {
    type: Sequelize.STRING,
    allowNull: false

  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  getterMethods: {
    route() {
      return '/wiki/' + this.urlTitle;
    }
  }
});

const User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false

  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};
