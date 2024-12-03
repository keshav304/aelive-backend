
# CasperCG Server Setup and Running Instructions

This README will guide you through the process of setting up and running the **CasperCG Server**, and how to execute commands and view substitutions on your screen using a terminal.

## Prerequisites
- **CasperCG Server** (for Windows)
- **Telnet Client** (or any terminal emulator that supports Telnet)

## Steps to Run CasperCG Server and Display Substitution Information

### 1. **Download and Install CasperCG Server**
   1. Go to the [CasperCG GitHub page](https://github.com/CasperCG) and download the latest **CasperCG Server** stable release.
   2. Extract the zip file to a folder of your choice (e.g., `C:\CasperCG`).
   3. Inside the extracted folder, you will find the `caspercg.exe` file.

### 2. **Run CasperCG Server**
   1. Open the folder where you extracted the **CasperCG Server** files.
   2. Double-click on the `caspercg.exe` file to start the server.
   3. A terminal window will open, and you should see output indicating the server is starting up.

   If everything is working correctly, you will see the following message:
   ```
   CasperCG Server version x.x.x
   Server started.
   Listening for incoming connections...
   ```

### 3. **Open Telnet Terminal to Connect to CasperCG Server**
   To send commands to the server, you need to connect via **Telnet**:

   1. Open **Command Prompt** (Windows) or a **Terminal** (Mac/Linux).
   2. Run the following command to connect to CasperCG using Telnet:
      ```bash
      telnet localhost 5250
      ```
   3. Once connected, you should see a prompt from CasperCG:
      ```
      telnet> 
      ```

   The server is now ready to accept commands via Telnet.

### 4. **Run the Command to Add a Substitution**
   To add a substitution command, enter the following command in the Telnet terminal:

   ```bash
   CG 1-10 ADD 1 "index" 0 "{\"playerOut\": {\"name\": \"Neymar\", \"number\": \"10\"}, \"playerIn\": {\"name\": \"Haaland\", \"number\": \"20\"}, \"subTime\": \"75:30\"}"
   ```

   - This command sends substitution data to the server, which will trigger the substitution graphic on the screen.
   - `1-10` refers to the channel and layer where the graphic will be displayed.
   - `"index"` is the name of the template you're using for displaying substitution information.
   - The JSON structure contains the `playerOut` and `playerIn` details, along with the substitution time `subTime`.

   After running this command, you should see the substitution graphic with the player names and numbers displayed on your screen.

### 5. **View Substitution List from API**
   To view the list of all substitutions logged, use the following API endpoint:

   ```
   https://aelive-backend.onrender.com/api/substitution/list
   ```

   You can open this URL in a browser or make an API request using **cURL** or any HTTP client (like Postman or Insomnia). This API will return the list of all substitutions that have been logged.

   Example request:
   ```bash
   curl https://aelive-backend.onrender.com/api/substitution/list
   ```

   The response will contain a list of all substitutions, including player details and substitution times.

### 6. **Stop the CasperCG Server**
   When you're finished, you can stop the server by closing the terminal window where the `caspercg.exe` is running or by pressing `Ctrl + C` in the terminal.

## Troubleshooting
- **Error Connecting via Telnet**: Make sure the **Telnet** client is enabled on Windows. You can enable it from the Control Panel:
  - Open **Control Panel** > **Programs** > **Turn Windows features on or off**.
  - Check **Telnet Client** and click OK.

- **Error in CasperCG Server**: If you encounter any issues, ensure that the server is running correctly, and the port `5250` is not blocked by a firewall.

## Conclusion
You have now successfully set up the **CasperCG Server**, connected to it via Telnet, and executed a command to display player substitution information. You can also view the list of substitutions via the provided API endpoint.

Feel free to modify the substitution data to suit your needs, and let me know if you encounter any issues!
```

