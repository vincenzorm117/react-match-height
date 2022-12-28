import MatchHeight from "../MatchHeight";
import "./styles.css";
import Equalizer from "react-equalizer";

function App() {
  return (
    <div className="App">
      <Equalizer byRow={true} className="row">
        <p className="mh">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula
          <br />
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient
          <br />
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque
          <br />
          eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo,
          <br />
          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut,
          <br />
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium.
          <br />
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate
          <br />
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
          eleifend ac,
          <br />
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus
          <br />
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam
        </p>
        <p className="mh">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula <br />
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient <br />
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque <br />
          eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo, <br />
          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, <br />
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. <br />
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate <br />
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
          eleifend ac, <br />
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus <br />
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
          imperdiet. Etiam <br />
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
          eget dui. <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula <br />
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient <br />
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque <br />
          eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo, <br />
          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, <br />
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. <br />
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate <br />
          eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
          eleifend ac, <br />
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus
        </p>
      </Equalizer>

      {/* <div className="row">
        <MatchHeight channel="text" className="mh">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula
            <br />
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient
            <br />
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque
            <br />
            eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo,
            <br />
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut,
            <br />
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
            <br />
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate
            <br />
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac,
            <br />
            enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus
            <br />
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam
          </p>
        </MatchHeight>
        <MatchHeight channel="text" className="mh">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula <br />
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient <br />
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque <br />
            eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, <br />
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, <br />
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. <br />
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate <br />
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, <br />
            enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus <br />
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam <br />
            ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
            eget dui. <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula <br />
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient <br />
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque <br />
            eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, <br />
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
            rhoncus ut, <br />
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. <br />
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate <br />
            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
            eleifend ac, <br />
            enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus
          </p>
        </MatchHeight>
      </div>
      <div className="row">
        <MatchHeight channel="cats" className="mh">
          <img src="/cat1.jpg" alt="cat1" />
        </MatchHeight>
        <MatchHeight channel="cats" className="mh">
          <img src="/cat2.jpg" alt="cat2" />
        </MatchHeight>
      </div> */}
    </div>
  );
}

export default App;
