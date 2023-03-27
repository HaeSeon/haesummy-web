import { Link } from 'react-router-dom';
import { SidebarItem } from '../SideBarItem';
import '../../styles/sidebar.css'
import { Divider } from 'antd'
import { CloseOutlined } from "@ant-design/icons"


export function Sidebar(props: {
  isOpen: boolean,
  setIsOpen: Function
}) {

  const generalMenus = [
    { name: "이해선이뭐에요", path: "/" },
  ];
  const projectMenus = [
    { name: "이거 엔딩보기 쉽지않을껄?", path: "/travel/main" },
    // { name: "공유공간", path: "/space" }
  ];



  const getGeneralMenus = () => {
    return generalMenus
  }

  const getProjectMenus = () => {
    return projectMenus
  }


  const closeMenu = () => {
    props.setIsOpen(false)
  }


  if (!props.isOpen) {
    return <></>
  }
  return (
    <div className="sidebar">
      <CloseOutlined onClick={closeMenu} style={{
        marginLeft: 'auto',
        marginBottom: "16px",
        fontSize: "24px "
      }} />
      <div>

        <div style={{ color: "black" }}>
          Haesummy
        </div>

      </div>
      <Divider style={{ margin: "2px", marginBottom: "16px", marginTop: "16px" }}></Divider>
      <div style={{
        marginRight: 'auto',
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        textAlign: 'start',
        flex: 1
      }}>
        {getGeneralMenus().map((menu, index) => {
          return (
            <Link
              to={menu.path} key={index}
              style={{ textDecoration: "none" }}>
              <div onClick={closeMenu}>
                <SidebarItem
                  menu={menu}
                />
              </div>
            </Link>
          );
        })}
        <Divider style={{ margin: 0 }} />
        <h3 style={{ margin: 0, color: "pink" }}>
          Project
        </h3>
        <div style={{ padding: "8px" }} onClick={() => { window.open("https://takingprize.com") }}>
          킹받는 어워즈, 킹받즈
        </div>
        {getProjectMenus().map((menu, index) => {
          return (
            <Link
              to={menu.path} key={index}
              style={{ textDecoration: "none" }}>
              <div onClick={closeMenu}>
                <SidebarItem
                  menu={menu}
                />
              </div>
            </Link>
          );
        })}

      </div>
    </div>
  );
}

