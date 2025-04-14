function SideBar() {
  return (
    <div style={{
      height: 'fit-content',
      width: '180px',
      backgroundColor: 'green',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '20px',
      position: 'fixed',
      top: '90px',
      left: '10px',
      display: window.innerWidth < 768 ? 'none' : 'block' // hide on mobile
    }}>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li style={{ margin: '30px 5px 5px', fontSize: '15px' }}><button>FILTER BY CATEGORY</button></li>
        <li style={{ margin: '30px 5px 5px', fontSize: '15px' }}><button>FILTER BY RANGE</button></li>
      </ul>
    </div>
  );
}

export default SideBar;