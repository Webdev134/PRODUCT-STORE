function SideBar() {
  return (
    <div className="sidebar" style={{
      height: '10vh',
      width: '100px',
      backgroundColor:'green',
      color: 'white',
      padding: '20px',
      position: 'fixed',
      top: 200,
      left: 10,
      borderRadius:'5px',
    }}>
      <ul style={{ listStyle: 'none', padding: '0'}}>
        <li style={{ margin: '20px 5px', fontSize:'14px'}}><button>FILTER BY CATEGORY</button></li>
        <li style={{ margin: '20px 5px', fontSize:'14px'}}><button>FILTER BY RANGE</button></li>
      </ul>
    </div>
  );
}
export default SideBar;