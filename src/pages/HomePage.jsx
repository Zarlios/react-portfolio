import coding from "../assets/icons8-coding-64.png"

function HomePage() {
  // test
  return (
    <div class="container-fluid" id="banner">
      <div class="text-lg-start">
        <div class="row">
          <div class="col" id="content">
            <img src={coding} alt="code"/>
            <h1>Matthew Hoepfl</h1>
            <h3>Javascript | Profile | Mumps | Gt.m</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              unde tempora vero labore asperiores vel reiciendis debitis iusto,
              saepe, amet ex quae veniam quam officia similique optio natus enim
              rerum.
            </p>
          </div>
          <div class="col">
            <div id="pic">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
