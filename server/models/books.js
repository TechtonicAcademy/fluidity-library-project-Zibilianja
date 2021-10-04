module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1, 100]
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
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        number_of_pages: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        cover_image_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        published_date: {
            type: ,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                min: 1
            }
        }
    });

    Book.associate = ({ Author }) => {
        Book.hasOne(Author)
    }
    
}