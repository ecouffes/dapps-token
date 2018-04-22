pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract DappsToken is StandardToken {

    string public name = "DappsToken";
    string public symbol = "DTKN";
    // 小数点の桁数
    uint public decimals = 18;

    function DappsToken(uint initialSupply) public {
        // 下記で定義
        // /zeppelin-solidity/contracts/token/ERC20/BasicToken.sol
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }
}