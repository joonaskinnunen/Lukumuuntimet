import React, { useEffect } from 'react'

const ConversionTable = () => {

    useEffect(() => {
        document.title = 'Yksikkömuuntimet - Laske & Muunna'
    })

    return (
        <div>
            <table className='prettyTable'>
                <caption>Taulukosta näet desimaali-, binääri- ja oktaaliluvut ja niitä vastaavan heksadesimaaliluvun.</caption>
                <tbody>
                    <tr>
                        <th>Heksa-<br />desimaali</th>
                        <th>Binääri</th>
                        <th>Desimaali</th>
                        <th>Oktaali</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>00</td>
                    </tr>
                    <tr>
                        <td >1</td>
                        <td >1</td>
                        <td >1</td>
                        <td >01</td>
                    </tr>
                    <tr>
                        <td >2</td>
                        <td >10</td>
                        <td >2</td>
                        <td >02</td></tr>
                    <tr>
                        <td >3</td>
                        <td >11</td>
                        <td >3</td>
                        <td >03</td>
                    </tr>
                    <tr>
                        <td >4</td>
                        <td >100</td>
                        <td >4</td>
                        <td >04</td>
                    </tr>
                    <tr>
                        <td >5</td>
                        <td >101</td>
                        <td >5</td>
                        <td >05</td>
                    </tr>
                    <tr>
                        <td >6</td>
                        <td >110</td>
                        <td >6</td>
                        <td >06</td>
                    </tr>
                    <tr>
                        <td >7</td>
                        <td >111</td>
                        <td >7</td>
                        <td >07</td>
                    </tr>
                    <tr>
                        <td >8</td>
                        <td >1000</td>
                        <td >8</td>
                        <td >010</td>
                    </tr>
                    <tr>
                        <td >9</td>
                        <td >1001</td>
                        <td >9</td>
                        <td >011</td>
                    </tr>
                    <tr>
                        <td >A</td>
                        <td >1010</td>
                        <td >10</td>
                        <td >012</td>
                    </tr>
                    <tr>
                        <td >B</td>
                        <td >1011</td>
                        <td >11</td>
                        <td >013</td>
                    </tr>
                    <tr>
                        <td >C</td>
                        <td >1100</td>
                        <td >12</td>
                        <td >014</td>
                    </tr>
                    <tr>
                        <td >D</td>
                        <td >1101</td>
                        <td >13</td>
                        <td >015</td>
                    </tr>
                    <tr>
                        <td >E</td>
                        <td >1110</td>
                        <td >14</td>
                        <td >016</td>
                    </tr>
                    <tr>
                        <td >F</td>
                        <td >1111</td>
                        <td >15</td>
                        <td >017</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ConversionTable