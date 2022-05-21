import './App.css';
import { circleDown, ellipses, low, mid, high, moduleHistory } from './assets';
import { AnalyticsCard, BreadCrumb, DivisionSummarySection, Header } from './components';

function App() {

  const tableData = [
    {
      name: "Courtney Henry",
      state: "Lagos State",
      address1: "775 Rolling Green Rd.",
      issues: 0,
      entries: 19,
      risk: "Low"
    }, {
      name: "Darrell Steward",
      state: "Lagos State",
      address1: "7529 E. Pecan St.",
      issues: 2,
      entries: 10,
      risk: "Mid"
    }, {
      name: "Cody Fisher",
      state: "Lagos State",
      address1: "3605 Parker Rd.",
      issues: 0,
      entries: 8,
      risk: "Mid"
    }, {
      name: "Bessie Cooper",
      state: "Lagos State",
      address1: "775 Rolling Green Rd.",
      issues: 1,
      entries: 12,
      risk: "High"
    }, {
      name: "Annette Black",
      state: "Lagos State",
      address1: "8080 Railroad St.",
      issues: 0,
      entries: 13,
      risk: "Low"
    }, {
      name: "Jenny Wilson",
      state: "Lagos State",
      address1: "8080 Railroad St.",
      issues: 5,
      entries: 18,
      risk: "High"
    }, {
      name: "Darlene Robertson",
      state: "Lagos State",
      address1: "3890 Poplar Dr.",
      issues: 2,
      entries: 6,
      risk: "Mid"
    }, {
      name: "Ralph Edwards",
      state: "Lagos State",
      address1: "8558 Green Rd.",
      issues: 0,
      entries: 14,
      risk: "Low"
    }
  ];

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

  const renderTableItem = (item, index) => (
    <tr key={index}>
      <td><input type={'checkbox'} /></td>
      <td><img src={circleDown} alt={""} /></td>
      <td>{item.name}</td>
      <td>
        <p className='small mb-sm'>{item.state}</p>
        <p className='small mute'>{item.address1}</p>
      </td>
      <td><span className={`badge badge-${item.issues ? "issues" : "empty"}`}>{item.issues ? `${item.issues} issues found` : 'No issues'}</span></td>
      <td>
        <p className='small mb-sm fw-bold'>&#8226;  {item?.entries ?? 'No'} Unique Entries</p>
        <p className='small mute'>Homogenous</p>
      </td>
      <td>
        <div className='flex'>
          <img src={renderRiskIcon(item.risk)} alt={""} />
          <p className={`text-${renderiskColor(item.risk)} risk`}>{item.risk} Risk</p>
        </div>
      </td>
      <td><img src={ellipses} alt={""} /></td>
      <td />
    </tr>
  )

  return (
    <div className="App">
      <Header />
      <main className='container'>
        <BreadCrumb parentRoute={"Divisions"} currentRoute={"Module"} />

        <div className='grid-5 mb-3'>
          <AnalyticsCard count={"31454"} label={"Ongoing metric"} />
          <AnalyticsCard count={"2344"} label={"Past metric"} />
          <AnalyticsCard count={"14224"} label={"Missed metric"} />
          <AnalyticsCard count={"635"} label={"Failed metric"} />
          <AnalyticsCard count={"11334"} label={"Pending metric"} />
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
                  <th className='emptyTable'><input type={'checkbox'} /></th>
                  <th className='emptyTable'></th>
                  <th>NAME</th>
                  <th>LOCATION</th>
                  <th>STATUS</th>
                  <th>ENTRIES</th>
                  <th>RISK PROFILE</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
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
