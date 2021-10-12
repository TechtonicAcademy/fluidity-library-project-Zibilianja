module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      synopsis: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 500],
        },
      },
      pages: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          isIn: [[1, 2, 3, 4, 5]],
        },
      },
      image: {
        type: DataTypes.TEXT('medium'),
        validate: {
            
        }
      },
      published: {
        type: DataTypes.DATEONLY,
        validate: {
            isDate: true
        }
      },
    },
    {
      paranoid: true,
    }
  );

  Book.associate = ({ Author }) => {
    Book.belongsTo(Author, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Book;
};
