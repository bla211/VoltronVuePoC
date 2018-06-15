export default{
  openedChildren: [],
  fundTypes: [
    {"DataSetId":"FF","FTYPEID":"E","FTYPEDesc":"Equity","DisplayName":"All Equity Funds","ExportName":"All Equity","DisplayOrder":0,"HasAccess":true},
    {"DataSetId":"FF","FTYPEID":"B","FTYPEDesc":"Bond","DisplayName":"All Bond Funds","ExportName":"All Bond","DisplayOrder":1,"HasAccess":true},
    {"DataSetId":"FF","FTYPEID":"A","FTYPEDesc":"Balanced","DisplayName":"All Multi Asset Funds","ExportName":"All Balanced","DisplayOrder":2,"HasAccess":true},
    {"DataSetId":"FF","FTYPEID":"M","FTYPEDesc":"Money Market","DisplayName":"All Money Market Funds","ExportName":"All MM","DisplayOrder":2,"HasAccess":true},
    {"DataSetId":"FF","FTYPEID":"Y","FTYPEDesc":"Alternative","DisplayName":"All Alternative Funds","ExportName":"All Alternative","DisplayOrder":2,"HasAccess":true},
    {"DataSetId":"FF","FTYPEID":"C","FTYPEDesc":"Custom","DisplayName":"Custom Groups","ExportName":"Custom","DisplayOrder":50,"HasAccess":false}
  ],
  marketTypes:{
    E: [
      {"FTYPEID":"E","MTYPEID":"1","MTYPEDesc":"All DM Funds","ExportName":"All Developed Markets","HasAccess":true},
      {"FTYPEID":"E","MTYPEID":"2","MTYPEDesc":"All EM Funds","ExportName":"All Emerging Markets","HasAccess":true}
    ],
    B: [
      {"FTYPEID":"E","MTYPEID":"1","MTYPEDesc":"All DM Funds","ExportName":"All Developed Markets","HasAccess":true},
      {"FTYPEID":"E","MTYPEID":"2","MTYPEDesc":"All EM Funds","ExportName":"All Emerging Markets","HasAccess":true}
    ]
  },
  filterObject: {

  }
};
