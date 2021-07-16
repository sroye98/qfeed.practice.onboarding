import { Layout } from 'antd';

import HeaderLayout from './components/Header';
import FooterLayout from './components/Footer';
import Registration from './views/Registration';

const { Header, Footer, Content } = Layout;

const Application = (props) => {
    return (
        <Router>
            <Layout>
                <Header>
                    <HeaderLayout />
                </Header>
                <Content style={{ margin: '20px' }}>
                    <div className="site-layout-content">
                        <Registration />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <FooterLayout />
                </Footer>
            </Layout>
        </Router>
    );
};

export default Application;