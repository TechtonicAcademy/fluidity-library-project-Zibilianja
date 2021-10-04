module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            auto_increment: true,
            primaryKey: true,
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
        },   
    }, {
        paranoid: true, 
        });

    Author.associate = ({ Book }) => {
        Author.hasMany(Book);
    };
    return Author;
};