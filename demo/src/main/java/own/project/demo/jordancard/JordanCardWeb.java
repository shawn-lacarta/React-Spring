package own.project.demo.jordancard;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jordanCard")
@CrossOrigin("http://localhost:3000/")
public class JordanCardWeb {
    private JordanCardService jordanCardService;

    public JordanCardWeb(JordanCardService jordanCardService) {
        this.jordanCardService = jordanCardService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<JordanCard> findUserById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok().body(jordanCardService.findById(id));
    }

    @PostMapping
    public ResponseEntity<JordanCard> postUser(@RequestBody JordanCard jordanCard) {
        return ResponseEntity.ok().body(jordanCardService.postJordanCard(jordanCard));
    }

    @GetMapping
    public ResponseEntity<List<JordanCard>> getAllUsers (){
        return ResponseEntity.ok().body(jordanCardService.getAllJordanCard());
    }


    @DeleteMapping("/{id}")
    public void deleteUserById (@PathVariable("id") Integer id) {
        jordanCardService.deleteJordanCard(id);
    }
}
