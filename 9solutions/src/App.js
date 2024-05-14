import logo from './logo.svg';
import './App.css';
import menuaberto from './img/menu-aberto.png';
import logocaixa from "./img/logoCaixa.png";
import './vendor/fontawesome-free/css/all.min.css';
import './css/sb-admin-2.min.css'
import './vendor/datatables/dataTables.bootstrap4.min.css'


function App() {
  return (
<>
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
    <ul
      className="navbar-nav sidebar sidebar-dark accordion"
      id="accordionSidebar"
      style={{ backgroundColor: "#008816", backgroundSize: "cover" }}
    >
      <img
        src={menuaberto}
        alt=""
        style={{ width: 20, marginLeft: 200 }}
      />
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          {/* <i class="fas fa-laugh-wink"></i> */}
          <img src={logocaixa} alt="" style={{ width: 80 }} />
        </div>
        {/* <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
      </a>
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <p style={{ color: "#082431", fontSize: 12 }}>MENU</p>
          <br />
          <img src="img/coracao.png" style={{ width: 20 }} />
          <span>Doações</span>
        </a>
      </li>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <img src="img/arquivo.png" alt="" style={{ width: 20 }} />
          <span>Histórico de Doações</span>
        </a>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <img src="img/carteira.png" alt="" style={{ width: 23 }} />
          <span>Pagamentos</span>
        </a>
      </li>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <img src="img/cupom.png" alt="" style={{ width: 20 }} />
          <span>Cupons</span>
        </a>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <p style={{ color: "#082431", fontSize: 12 }}>CAIXAS</p>
          <br />
          <img src="img/doacao.png" alt="" style={{ width: 20 }} />
          <span>Itens de Doação</span>
        </a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <a className="nav-link" href="">
          <p style={{ color: "#082431", fontSize: 12 }}>OUTROS</p>
          <br />
          <img src="img/engrenagem.png" alt="" style={{ width: 20 }} />
          <span>Configuração</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          <img src="img/do-utilizador.png" alt="" style={{ width: 20 }} />
          <span>Usuários</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          <img src="img/info.png" alt="" style={{ width: 20 }} />
          <span>Suporte</span>
        </a>
      </li>
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <center>
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </center>
      </div>
      <center>
        <img src="img/sair.png" alt="" style={{ width: 50 }} />
      </center>
    </ul>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <form className="form-inline">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars" />
            </button>
          </form>
          <h2 style={{ fontSize: "2rem" }}>Histórico de Doações</h2>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              {/* Dropdown - Messages */}
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  className="fas fa-bell fa-fw"
                  style={{ marginLeft: "190%" }}
                />
                {/* Counter - Alerts */}
                {/* <span class="badge badge-danger badge-counter">3+</span> */}
              </a>
              {/* Dropdown - Alerts */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for
                    your account.
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>
              </div>
            </li>
            {/* Nav Item - Messages */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              {/* Dropdown - Messages */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header">Message Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_1.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div className="small text-gray-500">
                      Emily Fowler · 58m
                    </div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_2.svg"
                      alt="..."
                    />
                    <div className="status-indicator" />
                  </div>
                  <div>
                    <div className="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_3.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-warning" />
                  </div>
                  <div>
                    <div className="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div className="small text-gray-500">
                      Morgan Alvarez · 2d
                    </div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..."
                    />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div>
                    <div className="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div className="small text-gray-500">
                      Chicken the Dog · 2w
                    </div>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </li>
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Felipe Portugal
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="img/pefilVerde.png"
                />
              </a>
              {/* Dropdown - User Information */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a className="drop<scriptdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* <div style="display: flex; width: 100px;"></div> */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-2 text-gray-800">Acompanhe suas doações</h1>
          <div
            style={{
              padding: 20,
              width: "100%",
              height: 200,
              backgroundColor: "white",
              borderRadius: 20,
              marginBottom: 10,
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              justifyContent: "space-evenly"
            }}
          >
            <div
              id="texts"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8%",
                marginLeft: 25
              }}
            >
              <h6>Número do Pedido:</h6>
              <h6>CPF Doador:</h6>
              <h6>Data Doação:</h6>
            </div>
            <div
              id="inputs"
              style={{
                display: "flex",
                gap: "3%",
                marginLeft: 30,
                marginTop: 10
              }}
            >
              <input type="text" style={{ height: 30, width: 210 }} />
              <input type="text" style={{ height: 30, width: 205 }} />
              <input type="date" style={{ height: 30, width: 300 }} />
            </div>
            <br />
            <h6 style={{ marginLeft: 25 }}>Status:</h6>
            <div
              id="checkbox"
              style={{
                display: "flex",
                gap: "2%",
                marginRight: 500,
                marginLeft: 40
              }}
            >
              <input type="checkbox" style={{ width: 25, height: 25 }} />
              Enviado
              <input type="checkbox" style={{ width: 25, height: 25 }} />
              Em montagem
              <input type="checkbox" style={{ width: 25, height: 25 }} />
              Em rota
              <input type="checkbox" style={{ width: 25, height: 25 }} />
              Cancelada
            </div>
          </div>
          {/* DataTales Example */}
          <div className="card shadow mb-4">
            <div
              className="card-header py-3"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <h6
                className="m-0 font-weight-bold text-primary"
                style={{ fontSize: "large" }}
              >
                Doações
              </h6>
              <img
                src="img/baixar.png"
                alt=""
                style={{ width: 20, marginLeft: "94%", marginBottom: 10 }}
              />
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>Pedido</th>
                      <th>Doador</th>
                      <th>CPF</th>
                      <th>Status</th>
                      <th>Data Doação</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Pedido</th>
                      <th>Doador</th>
                      <th>CPF</th>
                      <th>Status</th>
                      <th>Data Doação</th>
                      <th>Valor</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>João Silva</td>
                      <td>123.456.789-00</td>
                      <td>Em rota</td>
                      <td>2024-05-13</td>
                      <td>R$ 50,00</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Maria Oliveira</td>
                      <td>987.654.321-00</td>
                      <td>Em montagem</td>
                      <td>2024-05-12</td>
                      <td>R$ 30,00</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Carlos Santos</td>
                      <td>234.567.890-11</td>
                      <td>Enviado</td>
                      <td>2024-05-11</td>
                      <td>R$ 75,00</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>Ana Pereira</td>
                      <td>876.543.210-22</td>
                      <td>Cancelado</td>
                      <td>2024-05-10</td>
                      <td>R$ 85,00</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Pedro Costa</td>
                      <td>345.678.901-33</td>
                      <td>Enviado</td>
                      <td>2024-05-09</td>
                      <td>R$ 150,00</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>Juliana Almeida</td>
                      <td>210.987.654-44</td>
                      <td>Em montagem</td>
                      <td>2024-05-08</td>
                      <td>R$ 200,00</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>Fernando Lima</td>
                      <td>789.012.345-55</td>
                      <td>Enviado</td>
                      <td>2024-05-07</td>
                      <td>R$ 90,00</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>Lúcia Martins</td>
                      <td>456.789.012-66</td>
                      <td>Cancelado</td>
                      <td>2024-05-06</td>
                      <td>R$ 20,00</td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td>Ricardo Oliveira</td>
                      <td>123.098.765-77</td>
                      <td>Em rota</td>
                      <td>2024-05-05</td>
                      <td>R$ 80,00</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Camila Santos</td>
                      <td>890.123.456-88</td>
                      <td>Em montagem</td>
                      <td>2024-05-04</td>
                      <td>R$ 300,00</td>
                    </tr>
                    <tr>
                      <td>Jena Gaines</td>
                      <td>Office Manager</td>
                      <td>London</td>
                      <td>30</td>
                      <td>2008/12/19</td>
                      <td>$90,560</td>
                    </tr>
                    <tr>
                      <td>Quinn Flynn</td>
                      <td>Support Lead</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>2013/03/03</td>
                      <td>$342,000</td>
                    </tr>
                    <tr>
                      <td>Charde Marshall</td>
                      <td>Regional Director</td>
                      <td>San Francisco</td>
                      <td>36</td>
                      <td>2008/10/16</td>
                      <td>$470,600</td>
                    </tr>
                    <tr>
                      <td>Haley Kennedy</td>
                      <td>Senior Marketing Designer</td>
                      <td>London</td>
                      <td>43</td>
                      <td>2012/12/18</td>
                      <td>$313,500</td>
                    </tr>
                    <tr>
                      <td>Tatyana Fitzpatrick</td>
                      <td>Regional Director</td>
                      <td>London</td>
                      <td>19</td>
                      <td>2010/03/17</td>
                      <td>$385,750</td>
                    </tr>
                    <tr>
                      <td>Michael Silva</td>
                      <td>Marketing Designer</td>
                      <td>London</td>
                      <td>66</td>
                      <td>2012/11/27</td>
                      <td>$198,500</td>
                    </tr>
                    <tr>
                      <td>Paul Byrd</td>
                      <td>Chief Financial Officer (CFO)</td>
                      <td>New York</td>
                      <td>64</td>
                      <td>2010/06/09</td>
                      <td>$725,000</td>
                    </tr>
                    <tr>
                      <td>Gloria Little</td>
                      <td>Systems Administrator</td>
                      <td>New York</td>
                      <td>59</td>
                      <td>2009/04/10</td>
                      <td>$237,500</td>
                    </tr>
                    <tr>
                      <td>Bradley Greer</td>
                      <td>Software Engineer</td>
                      <td>London</td>
                      <td>41</td>
                      <td>2012/10/13</td>
                      <td>$132,000</td>
                    </tr>
                    <tr>
                      <td>Dai Rios</td>
                      <td>Personnel Lead</td>
                      <td>Edinburgh</td>
                      <td>35</td>
                      <td>2012/09/26</td>
                      <td>$217,500</td>
                    </tr>
                    <tr>
                      <td>Jenette Caldwell</td>
                      <td>Development Lead</td>
                      <td>New York</td>
                      <td>30</td>
                      <td>2011/09/03</td>
                      <td>$345,000</td>
                    </tr>
                    <tr>
                      <td>Yuri Berry</td>
                      <td>Chief Marketing Officer (CMO)</td>
                      <td>New York</td>
                      <td>40</td>
                      <td>2009/06/25</td>
                      <td>$675,000</td>
                    </tr>
                    <tr>
                      <td>Caesar Vance</td>
                      <td>Pre-Sales Support</td>
                      <td>New York</td>
                      <td>21</td>
                      <td>2011/12/12</td>
                      <td>$106,450</td>
                    </tr>
                    <tr>
                      <td>Doris Wilder</td>
                      <td>Sales Assistant</td>
                      <td>Sidney</td>
                      <td>23</td>
                      <td>2010/09/20</td>
                      <td>$85,600</td>
                    </tr>
                    <tr>
                      <td>Angelica Ramos</td>
                      <td>Chief Executive Officer (CEO)</td>
                      <td>London</td>
                      <td>47</td>
                      <td>2009/10/09</td>
                      <td>$1,200,000</td>
                    </tr>
                    <tr>
                      <td>Gavin Joyce</td>
                      <td>Developer</td>
                      <td>Edinburgh</td>
                      <td>42</td>
                      <td>2010/12/22</td>
                      <td>$92,575</td>
                    </tr>
                    <tr>
                      <td>Jennifer Chang</td>
                      <td>Regional Director</td>
                      <td>Singapore</td>
                      <td>28</td>
                      <td>2010/11/14</td>
                      <td>$357,650</td>
                    </tr>
                    <tr>
                      <td>Brenden Wagner</td>
                      <td>Software Engineer</td>
                      <td>San Francisco</td>
                      <td>28</td>
                      <td>2011/06/07</td>
                      <td>$206,850</td>
                    </tr>
                    <tr>
                      <td>Fiona Green</td>
                      <td>Chief Operating Officer (COO)</td>
                      <td>San Francisco</td>
                      <td>48</td>
                      <td>2010/03/11</td>
                      <td>$850,000</td>
                    </tr>
                    <tr>
                      <td>Shou Itou</td>
                      <td>Regional Marketing</td>
                      <td>Tokyo</td>
                      <td>20</td>
                      <td>2011/08/14</td>
                      <td>$163,000</td>
                    </tr>
                    <tr>
                      <td>Michelle House</td>
                      <td>Integration Specialist</td>
                      <td>Sidney</td>
                      <td>37</td>
                      <td>2011/06/02</td>
                      <td>$95,400</td>
                    </tr>
                    <tr>
                      <td>Suki Burks</td>
                      <td>Developer</td>
                      <td>London</td>
                      <td>53</td>
                      <td>2009/10/22</td>
                      <td>$114,500</td>
                    </tr>
                    <tr>
                      <td>Prescott Bartlett</td>
                      <td>Technical Author</td>
                      <td>London</td>
                      <td>27</td>
                      <td>2011/05/07</td>
                      <td>$145,000</td>
                    </tr>
                    <tr>
                      <td>Gavin Cortez</td>
                      <td>Team Leader</td>
                      <td>San Francisco</td>
                      <td>22</td>
                      <td>2008/10/26</td>
                      <td>$235,500</td>
                    </tr>
                    <tr>
                      <td>Martena Mccray</td>
                      <td>Post-Sales support</td>
                      <td>Edinburgh</td>
                      <td>46</td>
                      <td>2011/03/09</td>
                      <td>$324,050</td>
                    </tr>
                    <tr>
                      <td>Unity Butler</td>
                      <td>Marketing Designer</td>
                      <td>San Francisco</td>
                      <td>47</td>
                      <td>2009/12/09</td>
                      <td>$85,675</td>
                    </tr>
                    <tr>
                      <td>Howard Hatfield</td>
                      <td>Office Manager</td>
                      <td>San Francisco</td>
                      <td>51</td>
                      <td>2008/12/16</td>
                      <td>$164,500</td>
                    </tr>
                    <tr>
                      <td>Hope Fuentes</td>
                      <td>Secretary</td>
                      <td>San Francisco</td>
                      <td>41</td>
                      <td>2010/02/12</td>
                      <td>$109,850</td>
                    </tr>
                    <tr>
                      <td>Vivian Harrell</td>
                      <td>Financial Controller</td>
                      <td>San Francisco</td>
                      <td>62</td>
                      <td>2009/02/14</td>
                      <td>$452,500</td>
                    </tr>
                    <tr>
                      <td>Timothy Mooney</td>
                      <td>Office Manager</td>
                      <td>London</td>
                      <td>37</td>
                      <td>2008/12/11</td>
                      <td>$136,200</td>
                    </tr>
                    <tr>
                      <td>Jackson Bradshaw</td>
                      <td>Director</td>
                      <td>New York</td>
                      <td>65</td>
                      <td>2008/09/26</td>
                      <td>$645,750</td>
                    </tr>
                    <tr>
                      <td>Olivia Liang</td>
                      <td>Support Engineer</td>
                      <td>Singapore</td>
                      <td>64</td>
                      <td>2011/02/03</td>
                      <td>$234,500</td>
                    </tr>
                    <tr>
                      <td>Bruno Nash</td>
                      <td>Software Engineer</td>
                      <td>London</td>
                      <td>38</td>
                      <td>2011/05/03</td>
                      <td>$163,500</td>
                    </tr>
                    <tr>
                      <td>Sakura Yamamoto</td>
                      <td>Support Engineer</td>
                      <td>Tokyo</td>
                      <td>37</td>
                      <td>2009/08/19</td>
                      <td>$139,575</td>
                    </tr>
                    <tr>
                      <td>Thor Walton</td>
                      <td>Developer</td>
                      <td>New York</td>
                      <td>61</td>
                      <td>2013/08/11</td>
                      <td>$98,540</td>
                    </tr>
                    <tr>
                      <td>Finn Camacho</td>
                      <td>Support Engineer</td>
                      <td>San Francisco</td>
                      <td>47</td>
                      <td>2009/07/07</td>
                      <td>$87,500</td>
                    </tr>
                    <tr>
                      <td>Serge Baldwin</td>
                      <td>Data Coordinator</td>
                      <td>Singapore</td>
                      <td>64</td>
                      <td>2012/04/09</td>
                      <td>$138,575</td>
                    </tr>
                    <tr>
                      <td>Zenaida Frank</td>
                      <td>Software Engineer</td>
                      <td>New York</td>
                      <td>63</td>
                      <td>2010/01/04</td>
                      <td>$125,250</td>
                    </tr>
                    <tr>
                      <td>Zorita Serrano</td>
                      <td>Software Engineer</td>
                      <td>San Francisco</td>
                      <td>56</td>
                      <td>2012/06/01</td>
                      <td>$115,000</td>
                    </tr>
                    <tr>
                      <td>Jennifer Acosta</td>
                      <td>Junior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>43</td>
                      <td>2013/02/01</td>
                      <td>$75,650</td>
                    </tr>
                    <tr>
                      <td>Cara Stevens</td>
                      <td>Sales Assistant</td>
                      <td>New York</td>
                      <td>46</td>
                      <td>2011/12/06</td>
                      <td>$145,600</td>
                    </tr>
                    <tr>
                      <td>Hermione Butler</td>
                      <td>Regional Director</td>
                      <td>London</td>
                      <td>47</td>
                      <td>2011/03/21</td>
                      <td>$356,250</td>
                    </tr>
                    <tr>
                      <td>Lael Greer</td>
                      <td>Systems Administrator</td>
                      <td>London</td>
                      <td>21</td>
                      <td>2009/02/27</td>
                      <td>$103,500</td>
                    </tr>
                    <tr>
                      <td>Jonas Alexander</td>
                      <td>Developer</td>
                      <td>San Francisco</td>
                      <td>30</td>
                      <td>2010/07/14</td>
                      <td>$86,500</td>
                    </tr>
                    <tr>
                      <td>Shad Decker</td>
                      <td>Regional Director</td>
                      <td>Edinburgh</td>
                      <td>51</td>
                      <td>2008/11/13</td>
                      <td>$183,000</td>
                    </tr>
                    <tr>
                      <td>Michael Bruce</td>
                      <td>Javascript Developer</td>
                      <td>Singapore</td>
                      <td>29</td>
                      <td>2011/06/27</td>
                      <td>$183,000</td>
                    </tr>
                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © Projeto Caixa de Sapato</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  <div
    className="modal fade"
    id="logoutModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ready to Leave?
          </h5>
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Select "Logout" below if you are ready to end your current session.
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            type="button"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <a className="btn btn-primary" href="login.html">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript*/}
  {/* Core plugin JavaScript*/}
  {/* Custom scripts for all pages*/}
  {/* Page level plugins */}
  {/* Page level custom scripts */}
</>
  );
}

export default App;
