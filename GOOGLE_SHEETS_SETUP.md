# How to Connect the Contact Form to Google Sheets

Follow these steps to generate the **Google Apps Script Web App URL** that will save all contact form submissions directly into your Google Sheet.

## Step 1: Open Google Sheets
1. Open the Google Sheet you created: [Google Sheets Link](https://docs.google.com/spreadsheets/d/1AYcUSgUP6SVdvKHsZ356Q7hhJO5KKB1LDXovxKLNs8E/edit)
2. Add the following headers in Row 1 (A1 to H1):
   - `Date` (A1)
   - `name` (B1)
   - `email` (C1)
   - `phone` (D1)
   - `company` (E1)
   - `service` (F1)
   - `budget` (G1)
   - `details` (H1)

## Step 2: Open Google Apps Script
1. In the Google Sheets menu, click on **Extensions** -> **Apps Script**.
2. Delete any code in the editor and paste the following code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rowData = [];
  
  // Create a new row of data based on form submission
  rowData.push(new Date()); // Date
  rowData.push(e.parameter.name);
  rowData.push(e.parameter.email);
  rowData.push(e.parameter.phone);
  rowData.push(e.parameter.company);
  rowData.push(e.parameter.service);
  rowData.push(e.parameter.budget);
  rowData.push(e.parameter.details);
  
  sheet.appendRow(rowData);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

3. Save the script with a name like "BMV Contact Form Web App".

## Step 3: Deploy as Web App
1. At the top right, click **Deploy** -> **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**.
3. Under **Configuration**:
   - **Description**: Enter any description (e.g., "Contact Form v1").
   - **Execute as**: Select **Me** (your Google email account).
   - **Who has access**: Select **Anyone** (this is important so the form can reach it).
4. Click **Deploy**.
5. You might be asked to authorize access. Click **Authorize access**, choose your account, click **Advanced**, and click **Go to [Project Name] (unsafe)**. Allow the required permissions.
6. Once deployed, you will get a **Web app URL**. Copy this URL.

## Step 4: Update the React Code
1. Open the file `src/components/Contact.jsx` in this project.
2. Find the line inside the `handleSubmit` function:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'` with the Web App URL you just copied. Keep the URL inside the single quotes.
4. Save the file. The contact form is now fully integrated with your Google Sheet!
