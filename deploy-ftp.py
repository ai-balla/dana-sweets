import ftplib,json,pathlib
root=pathlib.Path(__file__).resolve().parent
cfg=json.loads((root/'ftp-config.local.json').read_text(encoding='utf-8-sig'))
ftp=ftplib.FTP_TLS(timeout=60)
try:
 ftp.connect(cfg['host'],cfg['port']);ftp.auth()
except ftplib.error_perm:
 ftp.close();ftp=ftplib.FTP(timeout=60);ftp.connect(cfg['host'],cfg['port'])
ftp.login(cfg['username'],cfg['password'])
if isinstance(ftp,ftplib.FTP_TLS):ftp.prot_p()
ftp.cwd('/'+cfg['directory'].strip('/'));base=ftp.pwd()
files=[root/n for n in ['index.html','style.css','menu.js','app.js']]+sorted((root/'assets').rglob('*'))
count=0
for file in files:
 if not file.is_file():continue
 ftp.cwd(base)
 for part in file.relative_to(root).parts[:-1]:
  try:ftp.cwd(part)
  except ftplib.error_perm:ftp.mkd(part);ftp.cwd(part)
 with file.open('rb') as stream:ftp.storbinary('STOR '+file.name,stream)
 count+=1
ftp.cwd(base);remote=[];ftp.retrbinary('RETR index.html',remote.append)
assert b''.join(remote)==(root/'index.html').read_bytes(),'Remote index does not match'
ftp.quit();print('Uploaded',count,'website files. Remote index verified. Credentials excluded.')