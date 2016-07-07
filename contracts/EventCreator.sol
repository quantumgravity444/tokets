import "Tokets.sol";
import "ToketSales.sol";

contract EventCreator {

    // Creates a new Tokets contract and new ToketSales contract
    function createNewEvent(
        uint256 _availableTokets, 
        string _description, 
        string _eventTime, 
        string _location, 
        uint256 _retailPrice
    ) 
        returns (bool success) 
    {   
        // Input price is in Ether
        _retailPrice = _retailPrice * 1 ether;

        // Deploy new Tokets contract
        Tokets newEvent = (new Tokets(_availableTokets, _description, _eventTime, _location, _retailPrice));
        created[msg.sender].push(address(newEvent));

        // Deploy new ToketSales contract
        ToketSales newSale = (new ToketSales(msg.sender, newEvent, _retailPrice));
        created[msg.sender].push(address(newSale));

        // Send all newly created Tokets to the newly deployed ToketSales contract
        newEvent.transfer(newSale, _availableTokets);

        SaleCreated(msg.sender, newSale, newEvent, _retailPrice);
        EventCreated(newEvent, _description, _eventTime, _location, _retailPrice);
    }

    mapping (address => address[]) public created;

    event SaleCreated(address indexed _owner, address indexed newSale, address indexed newEvent, uint256 retailPrice);
    event EventCreated(address indexed newEvent, string _description, string _eventTime, string _location, uint _retailPrice);
}