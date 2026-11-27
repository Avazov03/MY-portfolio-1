import re
from pathlib import Path
t = Path(r"d:\SCP loyhalar\Avazov DEV portfolio\projects-bento.js").read_text(encoding="utf-8")
# Split by project objects roughly
blocks = re.split(r"\n  \{\n", t)[1:]
print("blocks", len(blocks))
for b in blocks[:8]:
    pid = re.search(r"id:\s*'([^']+)'", b)
    title = re.search(r"title:\s*'([^']+)'", b)
    feat = re.search(r"featured:\s*(true|false)", b)
    print(pid.group(1) if pid else "?", title.group(1) if title else "?", feat.group(1) if feat else "?")
