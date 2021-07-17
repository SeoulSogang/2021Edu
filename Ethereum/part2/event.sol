pragma solidity >=0.4.22 <0.6.0;

contract sgs_event{
    string public var_1 = "Hello, this is SGS";
    
    event E_SetString(string var_1);
    
    function  setString(string memory _var_1) public {
        var_1 = _var_1;
        emit E_SetString(var_1);
    }
}
