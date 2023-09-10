import { FaBeer } from "react-icons/fa";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5">
          <FaBeer />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning outline>
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Somethnig
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
