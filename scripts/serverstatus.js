function serverstatus(index, ip, port) {
    MinecraftAPI.getServerStatus(ip, {
      port: port // char: §
    }, function (err, status) {
      if (err) {
        return document.querySelector('.server-status-' + index).innerHTML = 'Error loading status';
      }

      var upmotd = status.motd;
      var motd = '';

      for (var i = 0; i < upmotd.length; i++)
      {
        if (upmotd[i] == '§')
        {
          i++;
        }
        else 
        {
          motd = motd + upmotd[i];
        }
      }

    //   for (var i = 0; i < upmotd.length; i++)
    //   {
    //       if (upmotd[i] == '§')
    //       {
    //           if(upmotd[i + 1] == 'l') {
    //               motd = motd + "<span class=\"bold\">"

    //               for (var k = i;k < upmotd.length; k++)
    //               {

    //               }
    //           }
    //           if(upmotd[i + 1] == 'r') {
    //             motd = motd + "</span>"
    //           }

    //           i++
    //       }
    //       else
    //       {
    //           motd = motd + upmotd[i];
    //       }
    //   }


      var errormotd = "Cannot Reach Server!";
      document.querySelector('.server-status-' + index + ' .online').src = status.online ? 'images/minecraft/up.png' : 'images/minecraft/down.png';
      document.querySelector('.server-status-' + index + ' .favicon').src = status.online ? status.favicon : 'images/minecraft/favicon_default.png';
      if (status.favicon == undefined)
      {
        document.querySelector('.server-status-' + index + ' .favicon').src = 'images/minecraft/favicon_default.png';
      }
      document.querySelector('.server-status-' + index + ' .playersnow').innerHTML = status.players.now + "/" + status.players.max;
      if (status.online)
      {
        document.querySelector('.server-status-' + index +' .motd').innerHTML = motd;
      }
      else
      {
        document.querySelector('.server-status-' + index + ' .motd').innerHTML = errormotd;
      }

      document.querySelector('.server-status-' + index + ' .version').innerHTML = status.server.name;
      
      if (port == 25565)
      {
        document.querySelector('.server-status-' + index + ' .server-oo').innerHTML = ip
      }
      else
      {
        document.querySelector('.server-status-' + index + ' .server-oo').innerHTML = ip + ':' + port
      }
    }
    )}