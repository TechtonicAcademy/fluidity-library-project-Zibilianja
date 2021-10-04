module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                isNumeric: true,

            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        synopsis: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100]
            }
        },
        number_of_pages: {
            type: DataTypes.INTEGER,
        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
                isIn: [[1,2,3,4,5]]
            }
        },
        cover_image_url: {
            type: DataTypes.STRING,
        },
        published_date: {
            type: DataTypes.DATE,
        }
    }, {
        paranoid: true
    });

    Book.associate = ({ Author }) => {
        Book.belongsTo(Author, {
            onDelete: 'CASCADE',
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Book;
}