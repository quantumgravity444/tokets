import "Tokets.sol";
import "ToketSales.sol";

contract EventCreator {

    // Creates a new Tokets contract and new ToketSales contract
    function createNewEvent(uint256 _availableTokets, string _description, string _eventTime, string _location, uint256 _retailPrice) returns (bool success) {
        _retailPrice = _retailPrice * 1 ether;
        Tokets newEvent = (new Tokets(_availableTokets, _description, _eventTime, _location, _retailPrice));
        created[msg.sender].push(address(newEvent));
        ToketSales newSale = (new ToketSales(msg.sender, newEvent, _retailPrice));
        created[msg.sender].push(address(newSale));
        newEvent.transfer(newSale, _availableTokets);
        EventCreated(newEvent, _description, _eventTime, _location, _retailPrice);
        SaleCreated(msg.sender, newSale, newEvent, _retailPrice);
    }

    mapping (address => address[]) public created;
    event SaleCreated(address indexed _owner, address indexed newSale, address indexed newEvent, uint256 retailPrice);
    event EventCreated(address indexed newEvent, string _description, string _eventTime, string _location, uint _retailPrice);
}