pragma solidity >=0.4.22 <0.6.0;

contract test {
    string public var_1 = "Hello World. This is SGS";
    
    function setString(string memory _var_1) public {
        var_1 = _var_1;
    }
}
