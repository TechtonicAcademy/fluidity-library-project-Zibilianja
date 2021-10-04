module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        author_id: {
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
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        }   
    });

    Author.associate = ({ Books }) => {
        Author.hasMany(Books);
    }
}