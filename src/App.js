import { useEffect, useState } from 'react';
import './App.css';
import { circleDown, ellipses, low, mid, high, moduleHistory } from './assets';
import { AnalyticsCard, BreadCrumb, DivisionSummarySection, Header } from './components';
import { metricStats, tableHeaders } from './data/dummy';

function App() {
  const [newTableData, setNewTableData] = useState([]);

  const getData = async () => {
    await fetch('https://fakerapi.it/api/v1/custom?_quantity=10&firstName=firstName&lastName=lastName&city=city&buildingNumber=buildingNumber&streetName=streetName&streetAddress=streetAddress&card_expiration=card_expiration')
      .then(response => response.json())
      .then(res => {
        if (res.code === 200) setNewTableData(res.data);
        else console.log({ res })
      })
  };

  useEffect(() => {
    getData();
  }, []);

  const renderRiskIcon = (risk) => {
    switch (risk.toLowerCase()) {
      case "low":
        return low;
      case "mid":
        return mid;
      case "high":
        return high;
      default:
        return null
    };
  };

  const renderiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case "low":
        return 'success';
      case "mid":
        return 'mid';
      case "high":
        return 'danger';
      default:
        return null
    };
  };

  const renderTableItem = (item, index) => {

    const isCardValid = () => {
      const date = new Date();
      date.setMonth(Number(item.card_expiration.split('/')[0]) - 1);
      date.setFullYear(Number('20' + item.card_expiration.split('/')[1]));

      return new Date().getTime() < date.getTime();
    }

    return (
      <tr key={index}>
        <td><input type={'checkbox'} /></td>
        <td><img src={circleDown} alt={""} /></td>
        <td>{`${item.firstName} ${item.lastName}`}</td>
        <td>
          <p className='small mb-sm'>{item.city}</p>
          <p className='small mute ellipsis-text'>{`${item.buildingNumber} ${item.streetName} ${item.streetAddress}`}</p>
        </td>
        <td>{item.card_expiration}</td>
        <td><span className={`badge noWrap badge-${!isCardValid() ? "issues" : "empty"}`}>{!isCardValid() ? `1 issues found` : 'No issues'}</span></td>
        <td>
          <p className='small mb-sm fw-bold noWrap'>&#8226; No Unique Entries</p>
          <p className='small mute'>Homogenous</p>
        </td>
        <td>
          <div className='flex'>
            <img src={renderRiskIcon("Low")} alt={""} />
            <p className={`text-${renderiskColor("Low")} risk noWrap`}>{"Low"} Risk</p>
          </div>
        </td>
        <td><img src={ellipses} alt={""} /></td>
        {/* <td /> */}
      </tr>
    );
  };

  return (
    <div className="App">
      <Header />

      <main className='container'>
        <BreadCrumb routes={[{ label: "Divisions" }, { label: "Module" }]} />

        <div className='grid-5 mb-3'>
          {
            metricStats.map((item, index) => (
              <AnalyticsCard count={item.metricValue} label={item.label} />
            ))
          }
        </div>

        <div className='grid-5'>
          {/* sidebar cards */}
          <div>
            <DivisionSummarySection />

            <div className='history'>
              <div className='flex mb-3'>
                <img src={moduleHistory} alt={""} />
                <p className='ml-2'>Module History</p>
              </div>

              <div className={"timeline"}>
                <div className='mb-2'>
                  <p className='mb-1 small'>Searched “Journal Entries” on Division module</p>
                  <p className='mute small'>22:10 15/09/2020&nbsp; &#8226; &nbsp;Web</p>
                </div>
                <div className='mb-2'>
                  <p className='mb-1 small'>Searched “Journal Entries” on Division module</p>
                  <p className='mute small'>22:10 15/09/2020&nbsp; &#8226; &nbsp;Web</p>
                </div>
                <div>
                  <p className='mb-1 small'>Searched “Journal Entries” on Division module</p>
                  <p className='mute small'>22:10 15/09/2020&nbsp; &#8226; &nbsp;Web</p>
                </div>
              </div>
            </div>
          </div>

          {/* table view */}
          <div className='card span-4'>
            <table>
              <thead>
                <tr>
                  {tableHeaders.map(({ className = '', label }, index) => (
                    <th key={index} className={className}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {newTableData.map((item, index) => (
                  renderTableItem(item, index)
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
