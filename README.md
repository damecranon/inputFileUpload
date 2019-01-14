**Input File Upload**

 - Create input file to upload in html
 - Have script to automatically upload file from Blob and File Reader
    - write object for Blob to create a mock file
      - In Blob, do not set it, as it will set the size of your file.
      - Create a new variable(called it var fakeFile) and initialize it with Blob object.

    - write object to run file reader when the browser loads.
      - Manipulate the HTMLInputElement with the file to mock a file upload.
    - This example should work in jasmine testing at work. 
