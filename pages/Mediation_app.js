import Mediator from '../components_2/mediator/Mediator';
import Nav from '../components_2/navbar/Nav';
import Test from '../test/Test';
import UserPage from '../userFunction/userPage';
function Mediation_app() {
  return (
    <div>
      <Nav />
      <UserPage />
      <Mediator />
      {/* <Test /> */}
    </div>
  );
}

export default Mediation_app;
