
from process import process
import json

def processProblemFiles():
    data = json.load(open('problemFiles.json'))

    for file in data:
        with open(file, 'r') as f:
            lines = f.readlines()
            newLines = []
            for line in lines:
                if line.startswith("<email") and line.strip().endswith(">"):
                    # print line
                    line = line.replace("&", ";")
                    line = line.replace("<surname>", "surname_replace")
                    line = line.replace("<firstname>", "firstname_replace")
                    line = line.replace("<lastname>", "lastname_replace")
                    line = line.replace("<firstName>", "firstname_replace")
                    line = line.replace("<lastName>", "lastname_replace")
                    line = line.replace("<dougb", "dougb")
                    line = line.replace("<12.45>", "12.45")
                    line = line.replace(
                        "<blackljlaffIroukos>", "blackljlaffIroukos")
                    line = line.replace(
                        "<firstname.lastname>", "firstname.lastname_replace")
                    line = line.replace(
                        "<sanae@kecl.cslab.ntt.co.jp>", "sanae@kecl.cslab.ntt.co.jp")
                    line = line.replace("<surename>", "surename_replace")
                    line = line.replace(
                        "<markus.kreuzthaler,stefan.schulz>", "markus.kreuzthaler,stefan.schulz")
                    line = line.replace("<http", "http")
                    line = line.replace("<vramanarayanan,suendermann-oeft,aivanou,kevanini>",
                                        "vramanarayanan,suendermann-oeft,aivanou,kevanini")
                newLines.append(line)
        with open(file, 'w') as f:
            f.writelines(newLines)
    process(data)

processProblemFiles()