import React from 'react';
import './style.scss'
import TankDataType from "../../types/TankDataType";

interface PropsTypes {
    data: TankDataType | undefined
}

const TanksTable: React.FC<PropsTypes> = ({data}) => {
    if (!data || Object.keys(data).length <= 0)
        return (
            <div>
                Нет Данных.
            </div>
        );
    return (
        <div>
            <>
                <table className="tanks-table" data-testid="tanks-table">
                    <thead>
                    <tr>
                        <th>Nation</th>
                        <th>Icon</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Health</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(data).map((item) => {
                        const tank = data[item];
                        const flag = tank.nation;
                        const type = tank.type;
                        return (
                            <tr
                                key={item}
                                data-testid="table-row"
                            >
                                <td>
                                    <img
                                        src={require(`../../assets/flags/${flag}.png`)}
                                        alt={flag}
                                    />
                                </td>
                                <td>
                                    <img src={tank.images.small_icon} alt="tank icon"/>
                                </td>
                                <td>
                                    <img
                                        className="type-icon"
                                        src={require(`../../assets/types/${type}.png`)}
                                        alt={type}
                                    />
                                </td>
                                <td>{tank.name}</td>
                                <td>{tank.default_profile?.hp}</td>
                                <td>{tank.price_credit ?? 'No information'}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </>
        </div>
    );
};

export default TanksTable;