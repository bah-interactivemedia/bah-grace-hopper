import _ from 'lodash';

export default function downloadResponse(results) {
  const fields = ['agency', 'case_id', 'case_status', 'case_opened_date', 'case_closed_date', 'legal_name', 'company_street_1', 'company_city', 'company_state', 'company_zip'];

  let csvdata = '';

  _.each(results, (infoArray) => {
    const dataString = infoArray._source.agency + ','
      + infoArray._source.case_id + ','
      + infoArray._source.case_status + ','
      + (infoArray._source.case_opened_date || infoArray._source.amd_date) + ','
      + (infoArray._source.case_closed_date || infoArray._source.concluded_date) + ','
      + '"' + infoArray._source.legal_name + '",'
      + '"' + infoArray._source.company_street_1 + '",'
      + infoArray._source.company_city + ','
      + infoArray._source.company_state + ','
      + infoArray._source.company_zip + ',';
    csvdata += dataString + '\n';
  });

  const data = 'data:text/csv;charset=utf-8,' + fields + '\n' + csvdata;
  const encodedUri = encodeURI(data);
  // const link = document.createElement('a');
  // const urlQ = 'search_text';
  // link.setAttribute('href', encodedUri);
  // link.setAttribute('download', 'searchResults_' + urlQ + '.csv');
  // link.className += 'btn btn-primary';
  // link.text = 'Download Search Results CSV';
  // const linkId = document.getElementById('dynamicDownloadLink');
  // return linkId ? linkId.appendChild(link) : document.body.appendChild(link);
  return encodedUri;
}
