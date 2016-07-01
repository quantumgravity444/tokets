import "Tokets.sol";

contract ToketSales {
	address public eventCreator;
	address public newEvent;
	uint256 public retailPrice;

	function ToketSales(address _owner, address _event, uint256 _price) {
		eventCreator = _owner;
		newEvent = _event;
		retailPrice = _price;
	}

	modifier onlyEventCreator() {
		if (msg.sender != eventCreator) throw;
		_
	}

	modifier toketCost() {
		if (msg.value > retailPrice)
			msg.sender.send(retailPrice - msg.value);

		else if (msg.value < retailPrice) throw;
		_
	}

	function sendTokets(address _recipient) private returns (bool success) {
	    Tokets t = Tokets(newEvent);
		t.transfer(tx.origin, 1);
	}

	function buyTokets() toketCost returns (bool success) {
		sendTokets(tx.origin);
		Sale(tx.origin, msg.value);
	}

	function withdrawEth() onlyEventCreator {
		eventCreator.send(this.balance);
	}

	event Sale(address indexed _recipient, uint256 retailPrice);
}